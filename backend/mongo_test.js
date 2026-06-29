import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import mongoose from 'mongoose';

const uri = 'mongodb+srv://jegastudy_db_user:UxKSl6L1a6gxrxl1@cluster0.czbukvg.mongodb.net/mern_login?appName=Cluster0';

console.log('Connecting to database...');
mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Connection Error:', err.message);
    process.exit(1);
  });
