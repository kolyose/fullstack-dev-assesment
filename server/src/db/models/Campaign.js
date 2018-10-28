import mongoose from 'mongoose';

const transform = (doc, ret) => {  
  /* eslint-disable */
  delete ret['__v'];
  delete ret['_id'];
  return ret;
};

const PlatformSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true
  },
  total_budget: {
    type: Number,
    min: 0
  },
  remaining_budget: {
    type: Number,
    min: 0
  },
  start_date: {
    type: Number,
    required: true,
  },
  end_date: {
    type: Number,
    required: true,
  },
  target_audiance: {
    languages: [String],
    genders: [String],
    age_range: [Number],
    locations: [String],
    interests: { type: [String], default: undefined },
    KeyWords: { type: [String], default: undefined }
  },
  creatives: {
    header: String,
    header_1: String,
    header_2: String,
    description: String,
    url: String,
    image: String,
  },
  insights: {
    impressions: {
      type: Number,
      min: 0
    },
    clicks: {
      type: Number,
      min: 0
    },
    nanos_score: {
      type: Number,
      min: 0
    },
    cost_per_click: {
      type: Number,
      min: 0
    },
    click_through_rate: {
      type: Number,
      min: 0
    },
    advanced_kpi_1: {
      type: Number,
      min: 0
    },
    advanced_kpi_2: {
      type: Number,
      min: 0
    },
    website_visits: {
      type: Number,
      min: 0
    },
  },
});

PlatformSchema.set('toJSON', {
  transform
});

const CampaignSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  goal: String,
  total_budget: {
    type: Number,
    min: 0
  },
  status: {
    type: String,
    required: true
  },
  platforms: { type: Map, of: PlatformSchema },
});

CampaignSchema.set('toJSON', {
  transform
});

export default mongoose.model('Campaign', CampaignSchema);
