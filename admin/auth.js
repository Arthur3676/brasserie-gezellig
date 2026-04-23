// auth.js — Auth guard voor admin paginas
import { supabase } from './supabase-client.js';

export let currentUser    = null;
export let currentProfile = null;

export async function requireAuth({
  requireRole = 'admin',
  redirectTo  = '/admin/index.html',
  noRoleTo    = '/admin/index.html'
} = {}) {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error || !session) { window.location.href = redirectTo; return false; }

  currentUser = session.user;

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('id, role, naam, email')
    .eq('id', currentUser.id)
    .single();

  if (profileError || !profile) {
    await supabase.auth.signOut();
    window.location.href = redirectTo;
    return false;
  }

  currentProfile = profile;

  if (requireRole && profile.role !== requireRole) {
    if (profile.role === 'medewerker') window.location.href = '/admin/medewerker-dashboard.html';
    else window.location.href = noRoleTo;
    return false;
  }

  return true;
}

export async function logout() {
  await supabase.auth.signOut();
  window.location.href = '/admin/index.html';
}
