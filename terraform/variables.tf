variable "region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones" {
  description = "Availability zones"
  type        = list(string)
  default     = ["ap-south-1a", "ap-south-1b", "ap-south-1c"]
}

variable "private_subnet_cidrs" {
  description = "CIDR blocks for private subnets"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
}

variable "public_subnet_cidrs" {
  description = "CIDR blocks for public subnets"
  type        = list(string)
  default     = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
}

variable "cluster_name" {
  description = "Name of the EKS cluster"
  type        = string
  default     = "my-eks-cluster"
}

variable "cluster_version" {
  description = "Kubernetes version"
  type        = string
  default     = "1.30"
}

variable "node_groups" {
  description = "EKS node group configuration"
  type = map(object({
    instance_types = list(string)
    capacity_type  = string
    scaling_config = object({
      desired_size = number
      max_size     = number
      min_size     = number
    })
  }))
  default = {
    general = {
      instance_types = ["t3.medium"]
      capacity_type  = "ON_DEMAND"
      scaling_config = {
        desired_size = 2
        max_size     = 4
        min_size     = 1
      }
    }
  }
}

variable "rds_instance_identifier" {
  type        = string
  description = "Identifier for the RDS instance"
}

variable "rds_engine" {
  type        = string
  description = "RDS engine type"
}

variable "rds_engine_version" {
  type        = string
  description = "RDS engine version"
}

variable "rds_instance_class" {
  type        = string
  description = "RDS instance class"
}

variable "rds_allocated_storage" {
  type        = number
  description = "Allocated storage in GB"
}

variable "rds_username" {
  type        = string
  description = "Master username"
}

variable "rds_password" {
  type        = string
  description = "Master password"
  sensitive   = true
}

variable "rds_db_name" {
  type        = string
  description = "Initial database name"
}

variable "rds_skip_final_snapshot" {
  type        = bool
  description = "Skip final snapshot on destroy"
  default     = true
}
variable "rds_port" {
  type        = number
  description = "Port for the RDS instance"
  default     = 3306

}
