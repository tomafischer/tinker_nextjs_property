import { Schema, model, models } from "mongoose";

const kittenSchema = new Schema({
  name: String,
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittenSchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
    console.log(greeting);
    //return greeting;
};

//compile model from schema
const Kitten = models.Kitten || model("Kitten", kittenSchema);

export default Kitten;
