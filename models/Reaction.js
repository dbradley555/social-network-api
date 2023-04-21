const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const reactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
      default: () => dayjs().format('LLLL'),
    },
  },
  {
    toJSON: {
      getters: true,
    },

    id: false,
  }
);

module.exports = reactionSchema;
