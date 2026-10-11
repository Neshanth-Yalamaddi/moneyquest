import { StudentProfile, GameLanguage } from '../types';

export type UserRole = 'student' | 'ngo_staff' | 'admin';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  studentId?: string;
  organizationId: string;
  organizationName?: string;
  avatar?: string;
}

export interface AuthState {
  token: string | null;
  user: AuthUser | null;
  profile: StudentProfile | null;
}

const STORAGE_KEY_TOKEN = 'moneyquest_auth_token';
const STORAGE_KEY_USER = 'moneyquest_auth_user';
const STORAGE_KEY_STUDENT_PROFILE = 'moneyquest_student_profile';

export class AuthService {
  private static token: string | null = null;
  private static user: AuthUser | null = null;
  private static profile: StudentProfile | null = null;
  private static listeners: Array<(state: AuthState) => void> = [];

  public static initialize(): void {
    if (typeof window === 'undefined') return;

    try {
      this.token = window.localStorage.getItem(STORAGE_KEY_TOKEN);
      const userStr = window.localStorage.getItem(STORAGE_KEY_USER);
      if (userStr) {
        this.user = JSON.parse(userStr);
      }
      const profStr = window.localStorage.getItem(STORAGE_KEY_STUDENT_PROFILE);
      if (profStr) {
        this.profile = JSON.parse(profStr);
      }
    } catch (e) {
      console.warn('Failed to restore auth from localStorage', e);
    }
  }

  public static getToken(): string | null {
    if (!this.token && typeof window !== 'undefined') {
      this.token = window.localStorage.getItem(STORAGE_KEY_TOKEN);
    }
    return this.token;
  }

  public static getUser(): AuthUser | null {
    if (!this.user && typeof window !== 'undefined') {
      const userStr = window.localStorage.getItem(STORAGE_KEY_USER);
      if (userStr) {
        try {
          this.user = JSON.parse(userStr);
        } catch {}
      }
    }
    return this.user;
  }

  public static getProfile(): StudentProfile | null {
    if (!this.profile && typeof window !== 'undefined') {
      const profStr = window.localStorage.getItem(STORAGE_KEY_STUDENT_PROFILE);
      if (profStr) {
        try {
          this.profile = JSON.parse(profStr);
        } catch {}
      }
    }
    return this.profile;
  }

  public static isStudentAuthenticated(): boolean {
    const token = this.getToken();
    const user = this.getUser();
    return !!token && !!user && user.role === 'student';
  }

  public static isNgoAuthenticated(): boolean {
    const token = this.getToken();
    const user = this.getUser();
    return !!token && !!user && (user.role === 'ngo_staff' || user.role === 'admin');
  }

  private static async safeParseJson(res: Response): Promise<any> {
    try {
      const text = await res.text();
      if (!text || text.trim().length === 0) {
        return {};
      }
      return JSON.parse(text);
    } catch {
      return {};
    }
  }

  private static readonly STORAGE_KEY_LOCAL_USERS = 'moneyquest_local_registered_users';

  private static getLocalMockUser(email: string, password: string, expectedRole?: UserRole) {
    const cleanEmail = email.trim().toLowerCase();

    // 1. Built-in Demo Scholars & Staff
    const DEMO_ACCOUNTS: Record<string, { user: AuthUser; profile?: StudentProfile; validPasswords: string[] }> = {
      'arjun@student.in': {
        user: {
          id: 'usr_student_arjun',
          email: 'arjun@student.in',
          name: 'Arjun (The Scholar)',
          role: 'student',
          studentId: 'STU-1042',
          organizationId: 'org_vanguard',
          avatar: 'avatar_arjun',
        },
        profile: {
          studentId: 'STU-1042',
          userId: 'usr_student_arjun',
          organizationId: 'org_vanguard',
          preferredLanguage: 'en',
          scholarshipStipend: 5000,
          walletBalance: 4200,
          emergencyFund: 1200,
          totalScore: 380,
          currentRegionId: 'region_scholars_district',
          currentCityId: 'city_academic_bazaar',
          completedCityIds: ['city_hostel_commons'],
          failedCityIds: [],
          completedScenarioIds: ['scenario_hostel_stipend', 'scenario_broken_phone', 'scenario_cycle_repair'],
          badges: ['Scholarship Recipient', 'Needs vs Wants Master'],
          characterGender: 'boy',
          isNewUser: false,
          savedWorldState: {
            cityId: 'city_academic_bazaar',
            x: 480,
            y: 280,
            direction: 'down',
          },
          createdAt: 1791091077746,
          lastActiveAt: Date.now(),
        },
        validPasswords: ['Scholar@123'],
      },
      'priya@student.in': {
        user: {
          id: 'usr_student_priya',
          email: 'priya@student.in',
          name: 'Priya (The Tech Whiz)',
          role: 'student',
          studentId: 'STU-2088',
          organizationId: 'org_vanguard',
          avatar: 'avatar_priya',
        },
        profile: {
          studentId: 'STU-2088',
          userId: 'usr_student_priya',
          organizationId: 'org_vanguard',
          preferredLanguage: 'en',
          scholarshipStipend: 5000,
          walletBalance: 3100,
          emergencyFund: 500,
          totalScore: 190,
          currentRegionId: 'region_scholars_district',
          currentCityId: 'city_hostel_commons',
          completedCityIds: [],
          failedCityIds: ['city_hostel_commons'],
          completedScenarioIds: ['scenario_hostel_stipend'],
          badges: ['Scholarship Recipient'],
          characterGender: 'girl',
          isNewUser: false,
          savedWorldState: {
            cityId: 'city_hostel_commons',
            x: 200,
            y: 300,
            direction: 'right',
          },
          createdAt: 1791263877746,
          lastActiveAt: Date.now(),
        },
        validPasswords: ['Scholar@123'],
      },
      'rahul@student.in': {
        user: {
          id: 'usr_student_rahul',
          email: 'rahul@student.in',
          name: 'Rahul (The Saver)',
          role: 'student',
          studentId: 'STU-3015',
          organizationId: 'org_pratham',
          avatar: 'avatar_rahul',
        },
        profile: {
          studentId: 'STU-3015',
          userId: 'usr_student_rahul',
          organizationId: 'org_pratham',
          preferredLanguage: 'te',
          scholarshipStipend: 5000,
          walletBalance: 4800,
          emergencyFund: 1200,
          totalScore: 350,
          currentRegionId: 'region_scholars_district',
          currentCityId: 'city_academic_bazaar',
          completedCityIds: ['city_hostel_commons'],
          failedCityIds: [],
          completedScenarioIds: ['scenario_hostel_stipend', 'scenario_broken_phone', 'scenario_cycle_repair'],
          badges: ['Scholarship Recipient', 'Frugal Rider'],
          characterGender: 'boy',
          isNewUser: false,
          savedWorldState: null,
          createdAt: 1791350277746,
          lastActiveAt: Date.now(),
        },
        validPasswords: ['Scholar@123'],
      },
      'staff@vanguard.org': {
        user: {
          id: 'usr_staff_vanguard',
          email: 'staff@vanguard.org',
          name: 'Vanguard Educational Officer',
          role: 'ngo_staff',
          organizationId: 'org_vanguard',
          organizationName: 'Vanguard Youth Empowerment Hyderabad',
        },
        validPasswords: ['NgoStaff@2026', 'Vanguard@123'],
      },
      'mentor@pratham.org': {
        user: {
          id: 'usr_staff_pratham',
          email: 'mentor@pratham.org',
          name: 'Pratham District Coordinator',
          role: 'ngo_staff',
          organizationId: 'org_pratham',
          organizationName: 'Pratham Telangana Literacy Foundation',
        },
        validPasswords: ['NgoMentor@2026', 'Pratham@123'],
      },
    };

    const demo = DEMO_ACCOUNTS[cleanEmail];
    if (demo) {
      if (!demo.validPasswords.includes(password)) {
        throw new Error('Invalid email or password.');
      }
      if (expectedRole && demo.user.role !== expectedRole) {
        throw new Error(`Access denied for role ${expectedRole}.`);
      }
      const token = `mock_jwt_${demo.user.id}_${Date.now()}`;
      return { user: demo.user, profile: demo.profile, token };
    }

    // 2. Check local registered users in localStorage
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = window.localStorage.getItem(this.STORAGE_KEY_LOCAL_USERS);
        if (stored) {
          const list = JSON.parse(stored);
          const found = list.find((item: any) => item.email.toLowerCase() === cleanEmail);
          if (found) {
            if (found.password !== password) {
              throw new Error('Invalid email or password.');
            }
            if (expectedRole && found.user.role !== expectedRole) {
              throw new Error(`Access denied for role ${expectedRole}.`);
            }
            const token = `mock_jwt_${found.user.id}_${Date.now()}`;
            return { user: found.user, profile: found.profile, token };
          }
        }
      }
    } catch (e: any) {
      if (e.message && e.message.includes('Invalid')) throw e;
    }

    throw new Error('Invalid email or password. For demo testing, use arjun@student.in / Scholar@123');
  }

  public static async registerStudent(params: {
    email: string;
    password: string;
    name: string;
    avatar?: string;
    organizationId?: string;
    preferredLanguage?: GameLanguage;
  }): Promise<{ user: AuthUser; profile: StudentProfile; token: string }> {
    const cleanEmail = params.email.trim().toLowerCase();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...params,
          email: cleanEmail,
        }),
      });

      if (res.ok) {
        const data = await this.safeParseJson(res);
        this.setSession(data.token, data.user, data.profile);
        return data;
      }

      // If server returned a business error (e.g. 409 duplicate)
      if (res.status === 409 || res.status === 400) {
        const data = await this.safeParseJson(res);
        throw new Error(data.error || `Registration error (${res.status})`);
      }
    } catch (networkErr: any) {
      // Re-throw if already a user error
      if (networkErr.message && !networkErr.message.includes('Failed to fetch') && !networkErr.message.includes('NetworkError')) {
        throw networkErr;
      }
      console.warn('Backend unavailable, creating local student account fallback.', networkErr);
    }

    // Fallback: Create local account in localStorage
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const studentId = `STU-${randomId}`;
    const userId = `usr_local_${Date.now()}`;

    const newUser: AuthUser = {
      id: userId,
      email: cleanEmail,
      name: params.name.trim(),
      role: 'student',
      studentId,
      organizationId: params.organizationId || 'org_vanguard',
      avatar: params.avatar || 'avatar_arjun',
    };

    const newProfile: StudentProfile = {
      studentId,
      userId,
      organizationId: params.organizationId || 'org_vanguard',
      preferredLanguage: params.preferredLanguage || 'en',
      scholarshipStipend: 5000,
      walletBalance: 5000,
      emergencyFund: 0,
      totalScore: 0,
      currentRegionId: 'region_scholars_district',
      currentCityId: 'city_hostel_commons',
      completedCityIds: [],
      failedCityIds: [],
      completedScenarioIds: [],
      badges: ['Scholarship Recipient'],
      isNewUser: true,
      savedWorldState: null,
      createdAt: Date.now(),
      lastActiveAt: Date.now(),
    };

    // Save to local registered users
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const existing = window.localStorage.getItem(this.STORAGE_KEY_LOCAL_USERS);
        const list = existing ? JSON.parse(existing) : [];
        list.push({
          email: cleanEmail,
          password: params.password,
          user: newUser,
          profile: newProfile,
        });
        window.localStorage.setItem(this.STORAGE_KEY_LOCAL_USERS, JSON.stringify(list));
      }
    } catch {}

    const token = `mock_jwt_${userId}_${Date.now()}`;
    this.setSession(token, newUser, newProfile);
    return { user: newUser, profile: newProfile, token };
  }

  public static async login(
    email: string,
    password: string,
    expectedRole?: UserRole
  ): Promise<{ user: AuthUser; profile?: StudentProfile; token: string }> {
    const cleanEmail = email.trim().toLowerCase();

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          password,
          expectedRole,
        }),
      });

      if (res.ok) {
        const data = await this.safeParseJson(res);
        this.setSession(data.token, data.user, data.profile);
        return data;
      }

      // If server returned invalid credentials or forbidden
      if (res.status === 401 || res.status === 403) {
        const data = await this.safeParseJson(res);
        throw new Error(data.error || 'Invalid email or password.');
      }
    } catch (networkErr: any) {
      if (networkErr.message && !networkErr.message.includes('Failed to fetch') && !networkErr.message.includes('NetworkError')) {
        throw networkErr;
      }
      console.warn('Backend unavailable, falling back to local mock authentication.', networkErr);
    }

    // Fallback: Check local demo accounts & registered users
    const mockSession = this.getLocalMockUser(cleanEmail, password, expectedRole);
    this.setSession(mockSession.token, mockSession.user, mockSession.profile);
    return mockSession;
  }

  public static async fetchCurrentUser(): Promise<AuthUser | null> {
    const token = this.getToken();
    if (!token) return null;

    try {
      const res = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        this.logout();
        return null;
      }

      const data = await this.safeParseJson(res);
      if (data && data.user) {
        this.setSession(token, data.user, data.profile);
        return data.user;
      }
      return null;
    } catch {
      return this.getUser();
    }
  }

  public static setSession(token: string, user: AuthUser, profile?: StudentProfile | null): void {
    this.token = token;
    this.user = user;
    if (profile) {
      this.profile = profile;
    }

    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY_TOKEN, token);
      window.localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      if (profile) {
        window.localStorage.setItem(STORAGE_KEY_STUDENT_PROFILE, JSON.stringify(profile));
      }
    }

    this.notify();
  }

  public static updateStudentProfile(profile: StudentProfile): void {
    this.profile = profile;
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY_STUDENT_PROFILE, JSON.stringify(profile));
    }
    this.notify();

    // Async sync to server
    const token = this.getToken();
    if (token && this.user?.role === 'student') {
      fetch('/api/student/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
      }).catch((e) => console.warn('Failed to sync profile update to server', e));
    }
  }

  public static logout(): void {
    this.token = null;
    this.user = null;
    this.profile = null;

    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEY_TOKEN);
      window.localStorage.removeItem(STORAGE_KEY_USER);
      window.localStorage.removeItem(STORAGE_KEY_STUDENT_PROFILE);
      window.localStorage.removeItem('moneyquest_last_screen');
      window.localStorage.removeItem('moneyquest_world_state');
    }

    this.notify();
  }

  public static subscribe(listener: (state: AuthState) => void): () => void {
    this.listeners.push(listener);
    listener({
      token: this.token,
      user: this.user,
      profile: this.profile,
    });
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private static notify(): void {
    const state: AuthState = {
      token: this.token,
      user: this.user,
      profile: this.profile,
    };
    this.listeners.forEach((l) => l(state));
  }
}

AuthService.initialize();
