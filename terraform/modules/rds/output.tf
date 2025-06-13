output "rds_endpoint" {
  description = "RDS endpoint"
  value       = aws_db_instance.main.endpoint
}


output "db_name" {
  description = "Database name"
  value       = aws_db_instance.mysql.db_name
}
