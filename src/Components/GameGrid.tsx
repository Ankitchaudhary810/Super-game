import useGames from "../hooks/useGame";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.length > 0 &&
          games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </div>
  );
};

export default GameGrid;
