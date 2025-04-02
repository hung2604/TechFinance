import mongoose from 'mongoose';

const kickstarterSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  startTime: Date,
  endTime: Date,
  status: {
    type: String,
    enum: ["upcoming", "ongoing", "ended"],
    default: "upcoming"
  },
  reward: {
    type: Number,
    default: 0
  },
  claimed: {
    type: Boolean,
    default: false
  },
  claimedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
kickstarterSchema.pre("save", function(next) {
  this.updatedAt = /* @__PURE__ */ new Date();
  next();
});
const Kickstarter = mongoose.model("Kickstarter", kickstarterSchema);

export { Kickstarter as K };
//# sourceMappingURL=Kickstarter.mjs.map
