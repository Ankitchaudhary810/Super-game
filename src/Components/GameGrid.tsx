import useGames, { Platform } from "../hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  selectedGenre: Genre | null;
  selecedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  console.log(error);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 34, 5, 6, 7];
  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.length > 0 &&
          data.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
