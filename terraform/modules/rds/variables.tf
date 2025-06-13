variable "rds_instance_identifier" {
  description = "Identifier for the RDS instance"
  type        = string
}

variable "rds_allocated_storage" {
  description = "Allocated storage in GB"
  type        = number
}

variable "rds_engine" {
  description = "Database engine"
  type        = string
}

variable "rds_engine_version" {
  description = "Engine version"
  type        = string
}

variable "rds_instance_class" {
  description = "Instance class for the RDS DB"
  type        = string
}

variable "rds_db_name" {
  description = "Database name"
  type        = string
}

variable "rds_username" {
  description = "Master DB username"
  type        = string
}

variable "rds_password" {
  description = "Master DB password"
  type        = string
  sensitive   = true
}

variable "rds_skip_final_snapshot" {
  description = "Skip final snapshot on DB deletion"
  type        = bool
  default     = true
}

variable "vpc_id" {
  description = "VPC ID to launch RDS in"
  type        = string
}

variable "subnet_ids" {
  description = "Private subnet IDs for RDS"
  type        = list(string)
}
