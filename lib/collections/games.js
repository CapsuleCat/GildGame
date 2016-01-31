/**
 * Data Documentation
 *
 * The data stored for games is:
 *
 * - _id
 * - player1:String
 * - player1Ready:Boolean
 * - player1Elements: Array<String>
 * - player1Monster: String
 * - player2:String
 * - player2Ready:Boolean
 * - player2Elements: Array<String
 * - player2Monster: String
 */
Games = new Mongo.Collection('games');
