output "rds_endpoint" {
  description = "RDS endpoint"
  value       = aws_db_instance.main.endpoint
}


output "db_name" {
  description = "Database name"
  value       = aws_db_instance.main.db_name
}
output "rds_endpoint" {
  value = aws_db_instance.this.address
  description = "RDS Endpoint Address"
}
