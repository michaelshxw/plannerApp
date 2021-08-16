const db = require('../config/connection');
const { User, Class } = require('../models');
const userSeeds = require('./userSeeds.json');
const classSeeds = require('./classSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Class.deleteMany({});
    await User.create(userSeeds);
    await Class.create(classSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
