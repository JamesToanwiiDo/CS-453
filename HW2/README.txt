***Instructions***
Unzip the compressed file and launch the Terminal within the extracted folder. Make sure the 'access_log' dataset file is in the 'cs453-hw2-dataset' folder within the 'HW2' directory.

***Problem1***
1. Change the directory to Problem1 folder (/HW2/Problem1/)
2. Type into the Terminal: ./Problem1.sh 

If there's a permission error then type: chmod u+x Problem1.sh
Then redo step 2 again.

RAW Script of commands to type into Terminal (if unable to execute the .sh file):
// Please type in and run the commands line by line
// START
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
// END

***Problem2***
1. Change the directory to Problem1 folder (/HW2/Problem2/)
2. Type into the Terminal: ./Problem2.sh 

If there's a permission error then type: chmod u+x Problem2.sh
Then redo step 2 again.

RAW Script of commands to type into Terminal (if unable to execute the .sh file):
// Please type in and run the commands line by line
// START
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
// END

***Problem3***
1. Change the directory to Problem3 folder (/HW2/Problem3/)
2. Type into the Terminal: ./Problem3.sh 

If there's a permission error then type: chmod u+x Problem3.sh
Then redo step 2 again.

RAW Script of commands to type into Terminal (if unable to execute the .sh file):
// Please type in and run the commands line by line
// START
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
// END
