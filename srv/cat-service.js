const cds = require('@sap/cds')

module.exports = class DevChallengeService extends cds.ApplicationService {
    init() {
        this.after('READ', 'Books', each => {
            console.log()
            const project = __dirname+'/..'
            console.log('project:', project)
        })
        return super.init()
    }
}