const { newtonLeadeboardModel } = require('./connector')
const { data } = require('./data')

const refreshAll = async () => {
    await newtonLeadeboardModel.deleteMany({})
    // console.log(connection)
    await newtonLeadeboardModel.insertMany(data)
}
refreshAll()