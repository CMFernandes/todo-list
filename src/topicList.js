import { Topic } from "./topic";

export class TopicList {
  constructor() {
    this.topicList = [new Topic("Inbox")];
  };

  addTopic(title) {
    if (title !== "") {
      this.topicList.push(new Topic(title));
    };
  };

  removeTopic(topicToRemove) {
    this.topicList.forEach((topic, i) => {
      if (topic.title === topicToRemove) {
        this.topicList.splice(i, 1);
      }
    });
  };

  getTopicList() {
    return this.topicList;
  }
};
