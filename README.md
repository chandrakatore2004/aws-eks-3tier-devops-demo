----------------------------
DevOps Project Setup (3 Tier)

=> Our application contains 3 layers

1) Database (MySQL)

2) Backend (Java SpringBoot)

3) Frontend (Angular)


------------------
DB Setup


Step-1: Setup AWS RDS MySQL Instance and note down DB details

		DB Endpoint : 
		DB Username : 
		DB Password : 
		DB Initial Name : 

Step-2: Connect with MySQL DB using Workbench s/w and execute sql queries to insert products data into db tables.

Note: DB Queries file available in backend_app git repo

# Backend App Git Repo : https://github.com/chandrakatore2004/aws-eks-3tier-devops-demo

	DB Queries File Name: DB_Setup.sql

=======================
Backend App Deployment
=======================

# Backend App Git Repo : https://github.com/chandrakatore2004/aws-eks-3tier-devops-demo

Step-1 : Configure RDS DB instance connectivity Details in backend app git repo
	
	File to change : src/main/resources/application.properties

Step-2 : Create CI CD Pipeline to deploy backend application

	Stage-1 : Clone git repo

	Stage-2 : Maven Build

	Stage-3 : Create Docker Image

	Stage-4 : Push Docker image to docker hub/ECR

	Stage-5 : K8S deployment

Step-3 : Access Backend API in browser using LBR url --> http://a2724e73f8f6843edb1d85f638559669-781908185.ap-south-1.elb.amazonaws.com/products/2

		URL : http://LBR-URL/api/products

Note: If you are able to see products data in json format then your backend app is running successfully.

=========================
Frontend App Deployment
=========================

# Frontend App Git Repo : https://github.com/chandrakatore2004/aws-eks-3tier-devops-demo

Step-1 : Configure Backend API LBR Url in frontend application git repo

	File To Configure Bakend URL : ashokit_ecomm_store/src/app/constants.ts
E:\DevOps_Videos\DevOps_Projects\aws-eks-3tier-devops-demo\app\frontend-src\src\app-constants.ts
app\frontend-src\src\app-constants.ts

static BACKEND_API_URL= 'http://a2724e73f8f6843edb1d85f638559669-781908185.ap-south-1.elb.amazonaws.com/products';
------------------------------------------------------------------------------------
Step-2 : Create CI CD Job for frontend application deployment

	Stage-1 : Clone Git Repo

	Stage-2 : Create Docker Image

	Stage-3 : Push Docker Image to AWS ECR/ docker hub

	Stage-4 : K8S deployment

access app using LBR http://a8f2b3fcdaf5248629b4a7ccf797d326-982956579.ap-south-1.elb.amazonaws.com/