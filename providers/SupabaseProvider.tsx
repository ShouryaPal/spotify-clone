"use client";

import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import React, { useState } from "react";

interface SupabaseProviderProps {
    children: React.ReactNode
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const [supabseClient] = useState(() => 
        createClientComponentClient<Database>()
    );
    return (
        <SessionContextProvider supabaseClient={supabseClient} >
            {children}S
        </SessionContextProvider>
    )
}

export default SupabaseProvider;