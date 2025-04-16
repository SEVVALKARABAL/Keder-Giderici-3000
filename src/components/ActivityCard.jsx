export default function ActivityCard({
  number,
  activity,
  type,
  participants,
  price,
  accessibility,
}) {
  return (
    <div className='activity-card'>
      <div className='inner-card-container'>
        <div className='frontSide'>
          <p className='title'>Seçenek {number}</p>
        </div>
        <div className='backSide'>
          <p className='activity'>{activity}</p>
          <div className='stats-container'>
            <p>
              <span>Tür:</span> {type}{' '}
            </p>
            <p>
              <span>Karakter:</span> {activityData.character}
            </p>
            <p>
              <span>Alıntı:</span> {activityData.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
