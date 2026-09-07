import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Container, Stack, Grid, PageHeader } from '../src';

describe('Layout Primitives & Components', () => {
  it('renders Container with content and custom size', () => {
    render(<Container size="lg">Container Content</Container>);
    expect(screen.getByText('Container Content')).toBeInTheDocument();
  });

  it('renders Stack with flex layout props', () => {
    render(
      <Stack direction="row" gap="lg" align="center">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders Grid with column columns template', () => {
    render(
      <Grid cols={3} gap="md">
        <div>Grid 1</div>
        <div>Grid 2</div>
      </Grid>
    );
    expect(screen.getByText('Grid 1')).toBeInTheDocument();
  });

  it('renders PageHeader with title, subtitle, and actions slot', () => {
    render(
      <PageHeader
        title="Dashboard"
        subtitle="Manage your platform settings"
        actions={<button>Action</button>}
      />
    );
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Manage your platform settings')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
