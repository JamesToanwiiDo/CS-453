hadoop fs -mkdir /user/cloudera
hadoop fs -mkdir /user/cloudera/HW2
hadoop fs -mkdir /user/cloudera/HW2/Problem3 /user/cloudera/HW2/Problem3/input
hadoop fs -put ../cs453-hw2-dataset/access_log/ /user/cloudera/HW2/Problem3/input
mkdir -p build
javac -cp /usr/lib/hadoop/*:/usr/lib/hadoop-mapreduce/* Problem3.java -d build -Xlint 
jar -cvf Problem3.jar -C build/ . 
hadoop fs -rm -r /user/cloudera/HW2/Problem3/output/
hadoop jar Problem3.jar org.myorg.Problem3 /user/cloudera/HW2/Problem3/input /user/cloudera/HW2/Problem3/output
hadoop fs -cat /user/cloudera/HW2/Problem3/output/*
