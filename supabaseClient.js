import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xskawzobthhwekxixtpf.supabase.co'
const supabaseAnonKey = 'sb_publishable_d0mG8edPNm-QjMyYOiiVrQ_eW6xRTP_'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
