/** Maps Firebase Auth and service failures to user-facing messages. */
export function authErrorMessage(failure: unknown): string {
  const code = (failure as { code?: string } | null)?.code ?? '';
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
    case 'auth/invalid-email':
      return 'Email atau kata sandi salah. Silakan coba lagi.';
    case 'auth/too-many-requests':
      return 'Terlalu banyak percobaan gagal. Akun ditangguhkan sementara; coba lagi nanti atau gunakan "Lupa Password".';
    case 'auth/email-already-in-use':
      return 'Alamat email sudah terdaftar. Silakan langsung login.';
    case 'auth/weak-password':
      return 'Password harus memiliki minimal 6 karakter';
    case 'auth/network-request-failed':
      return 'Koneksi bermasalah. Periksa jaringan Anda lalu coba lagi.';
  }
  return failure instanceof Error ? failure.message : 'Terjadi kesalahan sistem.';
}

export const isThrottled = (failure: unknown): boolean =>
  (failure as { code?: string } | null)?.code === 'auth/too-many-requests';
