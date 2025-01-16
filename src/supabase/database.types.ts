export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          address_en: string | null;
          address_ka: string | null;
          avatar_url: string | null;
          company_name_en: string | null;
          company_name_ka: string | null;
          full_name_en: string | null;
          full_name_ka: string | null;
          id: string;
          phone: string | null;
          website_url: string | null;
        };
        Insert: {
          address_en?: string | null;
          address_ka?: string | null;
          avatar_url?: string | null;
          company_name_en?: string | null;
          company_name_ka?: string | null;
          full_name_en?: string | null;
          full_name_ka?: string | null;
          id: string;
          phone?: string | null;
          website_url?: string | null;
        };
        Update: {
          address_en?: string | null;
          address_ka?: string | null;
          avatar_url?: string | null;
          company_name_en?: string | null;
          company_name_ka?: string | null;
          full_name_en?: string | null;
          full_name_ka?: string | null;
          id?: string;
          phone?: string | null;
          website_url?: string | null;
        };
        Relationships: [];
      };
      vacancies: {
        Row: {
          address_en: string | null;
          address_ka: string | null;
          avatar_url: string | null;
          category: string | null;
          company_name_en: string | null;
          company_name_ka: string | null;
          created_at: string;
          description_en: string | null;
          description_ka: string | null;
          id: number;
          phone: string | null;
          salary_end: number | null;
          salary_start: number | null;
          title_en: string | null;
          title_ka: string | null;
          user_id: string | null;
          website_url: string | null;
          work_experience: string | null;
          work_type: string | null;
        };
        Insert: {
          address_en?: string | null;
          address_ka?: string | null;
          avatar_url?: string | null;
          category?: string | null;
          company_name_en?: string | null;
          company_name_ka?: string | null;
          created_at?: string;
          description_en?: string | null;
          description_ka?: string | null;
          id?: number;
          phone?: string | null;
          salary_end?: number | null;
          salary_start?: number | null;
          title_en?: string | null;
          title_ka?: string | null;
          user_id?: string | null;
          website_url?: string | null;
          work_experience?: string | null;
          work_type?: string | null;
        };
        Update: {
          address_en?: string | null;
          address_ka?: string | null;
          avatar_url?: string | null;
          category?: string | null;
          company_name_en?: string | null;
          company_name_ka?: string | null;
          created_at?: string;
          description_en?: string | null;
          description_ka?: string | null;
          id?: number;
          phone?: string | null;
          salary_end?: number | null;
          salary_start?: number | null;
          title_en?: string | null;
          title_ka?: string | null;
          user_id?: string | null;
          website_url?: string | null;
          work_experience?: string | null;
          work_type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'vacancies_address_en_fkey';
            columns: ['address_en'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['address_en'];
          },
          {
            foreignKeyName: 'vacancies_address_ka_fkey';
            columns: ['address_ka'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['address_ka'];
          },
          {
            foreignKeyName: 'vacancies_avatar_url_fkey';
            columns: ['avatar_url'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['avatar_url'];
          },
          {
            foreignKeyName: 'vacancies_company_name_en_fkey';
            columns: ['company_name_en'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['company_name_en'];
          },
          {
            foreignKeyName: 'vacancies_company_name_ka_fkey';
            columns: ['company_name_ka'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['company_name_ka'];
          },
          {
            foreignKeyName: 'vacancies_phone_fkey';
            columns: ['phone'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['phone'];
          },
          {
            foreignKeyName: 'vacancies_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'vacancies_website_url_fkey';
            columns: ['website_url'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['website_url'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
