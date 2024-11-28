import { Agent } from "../../../domain/entities/agent.entity";
import { User } from "../../../domain/entities/user.entity";
import logger from "../logger/logRotation";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Admin } from "../../../domain/entities/admin.entity";
import { Request } from "express";

dotenv.config();

/**
 * Secret key used for signing JWTs.
 * @constant {string}
 */
const SECRET_KEY = process.env.TOKEN_KEY;

/**
 * Generates a JWT token for client.
 *
 * @param {Object} user - The user object containing id, email,...
 * @param {string} time - The expiration time of the token (e.g., '1h', '2d').
 * @returns {string} - The generated JWT token.
 * @throws {Error} - Throws an error if the token generation fails.
 */
export function generateClientToken(user: User, time: number): string {
  const payload = {
    userId: user?.id,
    email: user?.email,
    countryCode: user?.countryCode,
    contact: user?.contact,
    role: user?.role
  };
  const options = {
    expiresIn: time,
  };
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined.');
  }
  try {
    const token = jwt.sign(payload, SECRET_KEY, options);
    return token;
  } catch (error) {
    logger.error('Erreur lors de la génération du token propriétaire:', error);
    throw new Error('Échec de la génération du token propriétaire.');
  }
}

/**
 * Generates a JWT token for a agent.
 *
 * @param {Object} user - The user object containing id, email,...
 * @param {string} time - The expiration time of the token (e.g., '1h', '2d').
 * @returns {string} - The generated JWT token.
 * @throws {Error} - Throws an error if the token generation fails.
 */
export function generateAgentToken(agent: Agent, time: number): string {
  const payload = {
    agentId: agent?.id,
    agentUserId: agent?.userId,
    email: agent?.user?.email,
    countryCode: agent?.user?.countryCode,
    contact: agent?.user?.contact,
    role: agent?.user?.role
  };

  const options = {
    expiresIn: time,
  };

  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined.');
  }

  try {
    const token = jwt.sign(payload, SECRET_KEY, options);
    return token;
  } catch (error) {
    logger.error('Error generating tenant token:', error);
    throw new Error('Failed to generate tenant token.');
  }
}

/**
 * Generates a JWT token for an admin.
 *
 * @param {Object} user - The user object containing id, email,...
 * @param {string} time - The expiration time of the token (e.g., '1h', '2d').
 * @returns {string} - The generated JWT token.
 * @throws {Error} - Throws an error if the token generation fails.
 */
export function generateAdminToken(admin: Admin, time: number): string {
  const payload = {
    adminId: admin?.id,
    adminUserId: admin?.userId,
    email: admin?.user?.email,
    countryCode: admin?.user?.countryCode,
    contact: admin?.user?.contact,
    role: admin?.user?.role
  };

  const options = {
    expiresIn: time,
  };

  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined.');
  }

  try {
    const token = jwt.sign(payload, SECRET_KEY, options);
    return token;
  } catch (error) {
    logger.error('Error generating admin token:', error);
    throw new Error('Failed to generate admin token.');
  }
}

/**
 * Reads a token value from the request object.
 *
 * @param {object} req - The HTTP request object.
 * @param {string} tokenName - The name of the token to read.
 * @returns {string|undefined} - The value of the token, or undefined if the token does not exist.
 */
export function readToken(req: any, tokenName: string): string | undefined {
  return req.tokens[tokenName];
}

/**
 * Clears a specific token from the response object.
 *
 * @param {object} res - The HTTP response object.
 * @param {string} tokenName - The name of the token to clear.
 */
export function cleartoken(res: any, tokenName: string) {

  if (res.tokens && res.tokens[tokenName]) {
    delete res.tokens[tokenName];
    logger.info(`Token ${tokenName} cleared from response.`);
  } else {
    logger.warn(`Token ${tokenName} not found in response.`);
  }
}