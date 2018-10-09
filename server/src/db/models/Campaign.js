import mongoose from 'mongoose';

const PlatformSchema = new mongoose.Schema({
  status: String,
  total_budget: Number,
  remaining_budget: Number,
  start_date: Date,
  end_date: Date,
  target_audiance: {
    languages: [String],
    genders: [String],
    age_range: [Number],
    locations: [String],
    interests: [String],
  },
  creatives: {
    header: String,
    description: String,
    url: String,
    image: String,
  },
  insights: {
    impressions: Number,
    clicks: Number,
    nanos_score: Number,
    cost_per_click: Number,
    click_through_rate: Number,
    advanced_kpi_1: Number,
    advanced_kpi_2: Number,
  },
});

const CampaignSchema = new mongoose.Schema({
  id: Number,
  name: String,
  goal: String,
  total_budget: Number,
  status: String,
  platforms: { type: Map, of: PlatformSchema },
});

export default mongoose.model('Campaign', CampaignSchema);
