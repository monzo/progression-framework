export function getTitle({ topic, genericData }) {
  const genericTopic = getGenericTopic(genericData, topic)
  return genericTopic ? genericTopic.title : topic.title
}

export function getCategory({ topic, genericData }) {
  const genericTopic = getGenericTopic(genericData, topic)
  return genericTopic
    ? genericData.categories.find(cat => cat.name === genericTopic.category)
    : genericData.categories.find(cat => cat.name === topic.category)
}

function getGenericTopic(genericData, topic) {
  return genericData.topics.find(obj => obj.name === topic.name)
}
