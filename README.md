#  React App with S3

Today in the presence of some awesome serverless cloud solutions like AWS and Firebase, handling file upload has become a piece of cake. Today we will see how we can quickly create an S3 bucket and upload files directly from our front-end React application.


## Pre Requisites

##### 1. An AWS Account
##### 2. Basic Understanding of ReactJS

### Step 1. Create S3 Bucket

Log in to your aws console. Search for Amazon S3 and click on Create bucket.

Then give it a name and select the proper region. Then uncheck the Block all public access just for now (You have to keep it unchecked in production).


## Step 4. Set Up React Project
npx create-react-app s3-upload-react


## Step 5. Upload File Via Native SDK
If we use other aws services in our project then we have a special npm package for that named aws-sdk. We can get it by





