import { Grid, Space } from "@mantine/core";

import Layout from "../layout";

import Minesweeper from "../components/minesweeper";
import Snake from "../components/snake";
import Tetris from "../components/tegris";
import Pacman from "../components/pacman";
import SpaceInvaders from "../components/space-invaders";
import Asteroids from "../components/asteroids";
import Frogger from "../components/frogger";
import Galaga from "../components/Galaga";
import Game2048 from "../components/2048";
import Futoshiki from "../components/Futoshiki";
export default function Page() {
  return (
    <Layout>
      <Grid>
        {/* <Grid.Col span={12}>{<Minesweeper />}</Grid.Col> */}
        {/* <Grid.Col span={12}>{<Snake />}</Grid.Col> */}
        {/* <Grid.Col span={12}>{<Tetris />}</Grid.Col> */}
        {/* <Grid.Col span={12}>
          <Pacman />
        </Grid.Col> */}
        {/* <Grid.Col span={12}>
          <SpaceInvaders />
        </Grid.Col> */}
        {/* <Grid.Col span={12}>
          <Asteroids />
        </Grid.Col> */}
        {/* <Grid.Col span={12}>
          <Frogger />
        </Grid.Col> */}
        {/* <Grid.Col span={12}>
          <Galaga />
        </Grid.Col> */}
        <Grid.Col span={12}>
          <Game2048 />
        </Grid.Col>
        {/* <Grid.Col span={12}>
          <Futoshiki />
        </Grid.Col> */}
      </Grid>
    </Layout>
  );
}
