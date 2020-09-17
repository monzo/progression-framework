import * as React from 'React'
import {
  CardContentList,
  CardTitle,
  CardCategory,
  CardTitleGroup,
  FrameworkCard,
  CardLevel,
  NoSkills,
} from '../styles'
import { default as ExampleCriteriaComponent } from './exampleCriteria'
import { getTitle, getCategory } from './helpers'

export default function TopicCard({
  topic,
  genericData,
  level,
  isGeneric,
  minimal,
}) {
  const topicContent = topic.content || []

  const genericTopic = genericData.topics.find(obj => obj.name === topic.name)

  const category = getCategory({ genericData, topic })
  const title = getTitle({ genericData, topic })

  const frameworkCriteria = topicContent
    .filter(objContent => objContent.level === level)
    .map(objContent =>
      objContent.criteria != null
        ? objContent.criteria.map((val, i) => (
            <li key={i + '-' + Math.random()}>{val}</li>
          ))
        : null,
    )

  const exampleCriteria = topicContent
    .filter(objContent => objContent.level === level)
    .map(objContent =>
      objContent.exampleCriteria != null
        ? objContent.exampleCriteria.map((val, i) => (
            <ExampleCriteriaComponent
              content={val}
              key={i + '-' + Math.random()}
            />
          ))
        : null,
    )

  const genericCriteria = genericTopic
    ? genericTopic.content
        .filter(objContent => objContent.level === level)
        .map(objContent =>
          (objContent.criteria || []).map((val, i) => (
            <li key={i + '-' + Math.random()}>{val}</li>
          )),
        )
    : null

  const genericExampleCriteria = genericTopic
    ? genericTopic.content
        .filter(objContent => objContent.level === level)
        .map(objContent =>
          objContent.exampleCriteria != null
            ? objContent.exampleCriteria.map((val, i) => (
                <ExampleCriteriaComponent
                  content={val}
                  key={i + '-' + Math.random()}
                />
              ))
            : null,
        )
    : null

  const criteria = [...frameworkCriteria, ...exampleCriteria]
  if (!isGeneric) {
    criteria.push(...genericCriteria, ...genericExampleCriteria)
  }
  return (
    <FrameworkCard key={topic.name} minimal={minimal}>
      {category && !minimal && (
        <CardCategory bgColor={category.color}>{category.title}</CardCategory>
      )}
      {!minimal && (
        <CardTitleGroup>
          <CardTitle>{title}</CardTitle>
        </CardTitleGroup>
      )}
      {minimal && <CardLevel>{level}</CardLevel>}
      <CardContentList>
        {criteria}
        {!criteria.length && (
          <NoSkills>No skills have been defined for this level</NoSkills>
        )}
      </CardContentList>
    </FrameworkCard>
  )
}
