hadoop fs -mkdir /user/cloudera
hadoop fs -mkdir /user/cloudera/HW2
hadoop fs -mkdir /user/cloudera/HW2/Problem1 /user/cloudera/HW2/Problem1/input
hadoop fs -put ../cs453-hw2-dataset/access_log/ /user/cloudera/HW2/Problem1/input
mkdir -p build
javac -cp /usr/lib/hadoop/*:/usr/lib/hadoop-mapreduce/* Problem1.java -d build -Xlint 
jar -cvf Problem1.jar -C build/ . 
hadoop fs -rm -r /user/cloudera/HW2/Problem1/output/
hadoop jar Problem1.jar org.myorg.Problem1 /user/cloudera/HW2/Problem1/input /user/cloudera/HW2/Problem1/output
hadoop fs -cat /user/cloudera/HW2/Problem1/output/* | grep "/assets/js/the-associates.js"
