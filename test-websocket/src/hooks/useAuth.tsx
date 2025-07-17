// src/hooks/useAuth.tsx (Simple Example)
import { useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Replace this logic with your real authentication logic
    setUser({ id: 'f2ac4a0d-6d21-48fb-a54d-7459e4cf9872', username: 'JohnDoe' });
  }, []);

  return { user };
}
