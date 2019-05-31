workflow "Build and deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install" {
  needs = "Master"
  uses = "actions/npm@master"
  args = "i"
}

action "Build" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "run build"
}

action "Deploy" {
  needs = "Build"
  uses = "w9jds/firebase-action@master"
  args = "deploy"
  secrets = ["FIREBASE_TOKEN"]
}
