// import ConversationsModel from "./noSQL/conversations.js";

// // import ConversationsModel from './sql/conversations.js'
// const saveConversation = async (user, messages) => {
//   const conversation = new ConversationsModel({ user, messages });

//   try {
//     await conversation.save();
//     console.log("Conversation saved successfully");
//   } catch (err) {
//     console.error("Error saving conversation: ", err);
//   }
// };

// export { saveConversation };


import ConversationsModel from './noSQL/conversations.js'

export {ConversationsModel}
