/*
 * Problem3.java
 *
 * Name: Toan Minh Do
 * CS 453 - Homework 2
 * September 26th, 2019
 * Dr. Xuechen Zhang
 */

package org.myorg;

import org.apache.log4j.Logger;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.conf.Configuration;
import java.net.URL;
import java.io.IOException;
import java.util.regex.Pattern;

public class Problem3 extends Configured implements Tool {

	private static final Logger LOG = Logger.getLogger(Problem3.class);

	public int run(String[] args) throws Exception {
		Job job = Job.getInstance(getConf(), "Problem3");
		job.setJarByClass(this.getClass());
		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.setOutputPath(job, new Path(args[1]));
		job.setMapperClass(Map.class);
		job.setReducerClass(Reduce.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(IntWritable.class);
		return job.waitForCompletion(true) ? 0 : 1;
	}

	public static class Map extends Mapper<LongWritable, Text, Text, IntWritable> {
	    private final static IntWritable ONE = new IntWritable(1);
	    private Text word = new Text();
	    private long numRecords = 0;   

	    public void map(LongWritable offset, Text lineText, Context context) throws IOException, InterruptedException {
	      String line = lineText.toString().trim();      
	      final int beginIndex = line.indexOf("\"");
	      final int endIndex = line.lastIndexOf("\"");

	      if(beginIndex > 1 && endIndex > 2) {
	    	  final String rStr = line.substring(beginIndex + 1, endIndex);
	    	  final String fullURL = rStr.split(" ")[1];
	    	  
	    	  if(fullURL.startsWith("http")) {
	    		  final URL url = new URL(fullURL);
	    		  word.set(url.getPath());
	    	  }
	    	  else {
	    		  word.set(fullURL);
	    	  }
	    	  context.write(word, ONE); 
			}
		}
	}

	public static class Reduce extends Reducer<Text, IntWritable, Text, IntWritable> {
		private int freq = 0;
		private Text temp = new Text("");

		@Override
		public void reduce(Text word, Iterable<IntWritable> counts, Context context) throws IOException, InterruptedException {
			int sum = 0;
			for (IntWritable count : counts) {
				sum += count.get();
			}

			if (freq < sum) {
				freq = sum;
				temp.set(word);
			}
		}

		@Override
		public void clean(Context context) throws IOException, InterruptedException {
			context.write(temp, new IntWritable(freq));
		}
	}

	public static void main(String[] args) throws Exception {
		int x = ToolRunner.run(new Problem3(), args);
		System.exit(x);
	}
}
