const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TracksScheme = mongoose.Schema(
    {
        name:{
            type: String
        },
        album: {
            type: String
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL"
            },
        },
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality: {
                type: String
            },
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: String,
        },
    },
    {
        timestamps: true, //TODO createdAt, udatedAt
        versionKey: false
    }
);

/**
 * Implementar metodo propio con relación a storage
 */

TracksScheme.static.findAllData = function () {
    const joinData = this.aggregate([ //TODO: Tracks
        {
            $lookup: {
                from: "storages", //TODO Tracks --> storages
                localField: "mediaId", //Todo Tracks.mediaId
                foreignField: "_id", //TODO: Storage._id
                as: "audio", //TODO: Alias
            },
        },
        {
            $unwind: "$audio",
        }
    ])
    return joinData;
}

TracksScheme.static.findOneData = function (id) {
    const joinData = this.aggregate([ //TODO: Tracks
        {
            $lookup: {
                from: "storages", //TODO Tracks --> storages
                localField: "mediaId", //Todo Tracks.mediaId
                foreignField: "_id", //TODO: Storage._id
                as: "audio", //TODO: Alias
            },
        },
        {
            $unwind: "$audio",
        },
        {
            $match: {
                _id: mongoose.Types.ObjectId(id)
            }
        }
    ])
    return joinData;
}

TracksScheme.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('tracks', TracksScheme);