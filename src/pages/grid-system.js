import React from 'react';
import Container from "../components/layout/container";
import Grid from "../components/layout/grid";
import GridColumn from "../components/layout/grid-column";



const GridSystem =  (props) => {


  return (
    <main className="pt-7">
      <Container>
        <Grid colCount="1">
          <GridColumn bgColor="yellow-100">Grid Content</GridColumn>
        </Grid>
        <Grid colCount="1" smColCount="12">
          <GridColumn colSpan="3" bgColor="yellow-200">Grid Content</GridColumn>
          <GridColumn colSpan="9" bgColor="yellow-300">Grid Content</GridColumn>
        </Grid>
        <Grid colCount="1" smColCount="3">
          <GridColumn bgColor="yellow-400">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-500">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-600">Grid Content</GridColumn>
        </Grid>
        <Grid colCount="1" smColCount="2" mdColCount="4">
          <GridColumn bgColor="blue-200">Grid Content</GridColumn>
          <GridColumn bgColor="blue-300">Grid Content</GridColumn>
          <GridColumn bgColor="blue-400">Grid Content</GridColumn>
          <GridColumn bgColor="blue-600">Grid Content</GridColumn>
        </Grid>
        <div className="py-8"></div>
        <Grid colCount="1" smColCount="2" mdColCount="4" lgColCount="3" xlColCount="6" xxlColCount="12">
          <GridColumn bgColor="yellow-100">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-200">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-300">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-400">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-500">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-600">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-100">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-200">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-300">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-400">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-500">Grid Content</GridColumn>
          <GridColumn bgColor="yellow-600">Grid Content</GridColumn>
        </Grid>
        <div className="py-8"></div>
        <Grid colCount="2" mdColCount="4" gridGap="4">
          <GridColumn bgColor="blue-100">Grid Content</GridColumn>
          <GridColumn bgColor="blue-200">Grid Content</GridColumn>
          <GridColumn bgColor="blue-300">Grid Content</GridColumn>
          <GridColumn bgColor="blue-400">Grid Content</GridColumn>
        </Grid>
      </Container>
    </main>
  )
}

export default GridSystem;