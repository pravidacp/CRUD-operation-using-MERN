import mongoose from "mongoose";
import sequence from 'mongoose-sequence'; // Import sequence

const AutoIncrement = sequence(mongoose); // Pass mongoose to sequence

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
});

// Use the plugin, specifying the field for auto-increment
userSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const User = mongoose.model('User', userSchema);

export default User;
