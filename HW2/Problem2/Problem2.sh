hadoop fs -mkdir /user/cloudera
hadoop fs -mkdir /user/cloudera/HW2
hadoop fs -mkdir /user/cloudera/HW2/Problem2 /user/cloudera/HW2/Problem2/input
hadoop fs -put ../cs453-hw2-dataset/access_log/ /user/cloudera/HW2/Problem2/input
mkdir -p build
javac -cp /usr/lib/hadoop/*:/usr/lib/hadoop-mapreduce/* Problem2.java -d build -Xlint 
jar -cvf Problem2.jar -C build/ . 
hadoop fs -rm -r /user/cloudera/HW2/Problem2/output/
hadoop jar Problem2.jar org.myorg.Problem2 /user/cloudera/HW2/Problem2/input /user/cloudera/HW2/Problem2/output
hadoop fs -cat /user/cloudera/HW2/Problem2/output/* | grep "10.99.99.186"
