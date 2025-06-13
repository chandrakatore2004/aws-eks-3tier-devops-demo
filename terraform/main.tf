terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "chandra-terraform-eks-state-s3-bucket"
    key            = "terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-eks-state-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = var.region
}

module "vpc" {
  source = "./modules/vpc"

  vpc_cidr             = var.vpc_cidr
  availability_zones   = var.availability_zones
  private_subnet_cidrs = var.private_subnet_cidrs
  public_subnet_cidrs  = var.public_subnet_cidrs
  cluster_name         = var.cluster_name
}

module "eks" {
  source = "./modules/eks"

  cluster_name    = var.cluster_name
  cluster_version = var.cluster_version
  vpc_id          = module.vpc.vpc_id
  subnet_ids      = module.vpc.private_subnet_ids
  node_groups     = var.node_groups
}

module "rds" {
  source = "./modules/rds"

  rds_instance_identifier = var.rds_instance_identifier
  rds_allocated_storage   = var.rds_allocated_storage
  rds_engine              = var.rds_engine
  rds_engine_version      = var.rds_engine_version
  rds_instance_class      = var.rds_instance_class
  rds_db_name             = var.rds_db_name
  rds_username            = var.rds_username
  rds_password            = var.rds_password
  rds_skip_final_snapshot = var.rds_skip_final_snapshot
  vpc_id                  = module.vpc.vpc_id
  subnet_ids              = module.vpc.private_subnet_ids
}

