import React, { useState } from 'react';
import { Box, Grid, Button, Heading, Text } from '@chakra-ui/react';

const initialBoard = Array(9).fill(null);

const Tic = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }
  
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
  
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i];
        const [a, b, c] = combo;
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
          setWinner(currentPlayer);
          return;
        }
      }
      
  
    if (!newBoard.includes(null)) {
      setWinner('draw');
      return;
    }
  
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };
  

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <Box py={8} textAlign="center">
      <Heading as="h1" size="2xl" mb={8}>
        Tic Tac Toe
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} maxWidth="300px" mx="auto">
        {board.map((cell, index) => (
          <Button
            key={index}
            size="lg"
            colorScheme="teal"
            disabled={cell !== null || winner !== null}
            onClick={() => handleClick(index)}
          >
            {cell}
          </Button>
        ))}
      </Grid>
      {winner && (
        <Text mt={4} fontSize="xl">
          Winner: {winner}
        </Text>
      )}
     {winner === 'draw' && (
  <Text mt={4} fontSize="xl">
    It's a draw!
  </Text>
)}
      <Button mt={8} colorScheme="red" onClick={resetGame}>
        Reset
      </Button>
    </Box>
  );
};

export default Tic;