terraform {
  backend "s3" {
    bucket        = "ck-terraform-eks-state-s3-bucket"
    key           = "terraform.tfstate"
    region        = "ap-south-1"
    encrypt       = true
    use_lockfile  = true
  }
}
