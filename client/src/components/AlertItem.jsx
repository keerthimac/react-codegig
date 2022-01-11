function AlertItem({ alert }) {
  return (
    <div>
      <div className='error'>{alert.text}</div>
    </div>
  );
}

export default AlertItem;
