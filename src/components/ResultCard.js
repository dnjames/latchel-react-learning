function ResultCard({launch}) {
    return (
      <tr>
        <td>{launch.mission_name}</td>
        <td>{launch.flight_number}</td>
      </tr>
    );
}

export default ResultCard;