workflow "Publish master" {
  on = "push"
  resolves = ["Deploy master"]
}

action "Filter master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install master" {
  needs = "Filter master"
  uses = "actions/npm@master"
  args = "i"
}

action "Build master" {
  needs = "Install master"
  uses = "actions/npm@master"
  args = "run build"
}

action "Deploy master" {
  needs = "Build master"
  uses = "w9jds/firebase-action@master"
  args = "deploy"
  secrets = ["FIREBASE_TOKEN"]
}

workflow "Test PR" {
  on = "push"
  resolves = ["Build PR"]
}

action "Filter not master" {
  uses = "actions/bin/filter@master"
  args = "not branch master"
}

action "Install PR" {
  needs = "Filter not master"
  uses = "actions/npm@master"
  args = "i"
}

action "Build PR" {
  needs = "Install PR"
  uses = "actions/npm@master"
  args = "run build"
}
