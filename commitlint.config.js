module.exports = {
    extends: ['@commitlint/config-convetional'],
    rules: {
        "type-enum": [2, "always", ['chore', 'feat', 'fix', 'refactor']],
        
    }
}