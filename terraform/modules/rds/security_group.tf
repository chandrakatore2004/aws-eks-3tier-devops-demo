resource "aws_security_group" "rds_sg" {
  name        = "ashokit-ecomm-db-sg"
  description = "Security group for RDS"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = ["172.31.0.0/16"]
  }

  # other ingress/egress rules...

  tags = {
    Name = "ashokit-ecomm-db-sg"
  }
}
