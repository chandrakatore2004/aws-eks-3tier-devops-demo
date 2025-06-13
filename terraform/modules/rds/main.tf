resource "aws_db_subnet_group" "main" {
  name       = "${var.rds_instance_identifier}-subnet-group"
  subnet_ids = var.subnet_ids

  tags = {
    Name = "${var.rds_instance_identifier}-subnet-group"
  }
}

resource "aws_security_group" "rds_sg" {
  name        = "${var.rds_instance_identifier}-sg"
  description = "Allow MySQL access within VPC"
  vpc_id      = var.vpc_id

  ingress {
    description = "Allow MySQL traffic from within VPC"
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.rds_instance_identifier}-sg"
  }
}

