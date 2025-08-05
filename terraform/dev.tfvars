region = "ap-south-1"

vpc_cidr = "10.0.0.0/16"

availability_zones = ["ap-south-1a", "ap-south-1b", "ap-south-1c"]

private_subnet_cidrs = [
  "10.0.1.0/24",
  "10.0.2.0/24",
  "10.0.3.0/24"
]

public_subnet_cidrs = [
  "10.0.4.0/24",
  "10.0.5.0/24",
  "10.0.6.0/24"
]

cluster_name    = "my-eks-cluster"
cluster_version = "1.31"

node_groups = {
  general = {
    instance_types = ["t3.medium"]
    capacity_type  = "ON_DEMAND"
    version        = "1.31"
    scaling_config = {
      desired_size = 2
      max_size     = 2
      min_size     = 2
    }
  }
}

# RDS variables
rds_instance_identifier = "ashokit-ecomm-db"
rds_allocated_storage   = 20
rds_engine              = "mysql"
rds_engine_version      = "8.0"
rds_instance_class      = "db.t3.micro"
rds_db_name             = "ashokit_ecomm"
rds_port                = "3306"
rds_skip_final_snapshot = true
