import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';

export default function NotFound() {
  return (
    <div
      style={{
        paddingTop: '160px',
        paddingBottom: '120px',
        backgroundColor: 'var(--color-cream)',
        textAlign: 'center',
      }}
    >
      <Container size="narrow">
        <span
          style={{
            fontSize: '80px',
            fontFamily: 'var(--font-heading), serif',
            color: 'var(--color-gold)',
            display: 'block',
            marginBottom: '16px',
          }}
        >
          404
        </span>
        <h1 style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--color-charcoal)' }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--color-gray)', marginBottom: '32px' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="gold" size="lg">
            Return to Sanctuary Home
          </Button>
        </Link>
      </Container>
    </div>
  );
}
