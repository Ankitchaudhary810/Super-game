import useGames from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 34, 5, 6, 7];
  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.length > 0 &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
